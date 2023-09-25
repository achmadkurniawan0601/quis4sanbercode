const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      platformName: 'Android', // Ganti dengan iOS jika menggunakan iOS
      deviceName: 'Asus', // Ganti dengan nama perangkat Anda
      appPackage: 'com.instagram.android', // Package name untuk Instagram
      appActivity: 'com.instagram.mainactivity.MainActivity', // Activity name untuk Instagram
      automationName: 'UiAutomator2', // Menggunakan UiAutomator2 untuk Android
      platformVersion: '7.1.1', // Ganti dengan versi Android Anda
      app: '/path/to/Instagram.apk', // Ganti dengan path ke file Instagram APK
      noReset: true, // Menghindari reset aplikasi setelah setiap tes
    },
  });

  // Test Case 1: Membuka Aplikasi Instagram
  await browser.init();
  await browser.pause(5000); // Tunggu beberapa detik
  console.log('Aplikasi Instagram terbuka');

  // Test Case 2: Memasukkan informasi login
  const usernameField = await browser.$('//android.widget.EditText[@content-desc="Username"]');
  const passwordField = await browser.$('//android.widget.EditText[@content-desc="Password"]');
  const loginButton = await browser.$('//android.widget.Button[@content-desc="Log In"]');
  
  await usernameField.setValue('akakurr'); // Ganti dengan username Anda
  await passwordField.setValue('test'); // Ganti dengan password Anda
  await loginButton.click();
  console.log('Informasi login dimasukkan dan tombol login diklik');

  // Test Case 3: Memeriksa apakah berhasil login
  await browser.pause(5000); // Tunggu beberapa detik
  const feedExists = await browser.isExisting('//android.widget.TextView[@text="Home"]');

  if (feedExists) {
    console.log('Berhasil login ke Instagram');
  } else {
    console.log('Gagal login ke Instagram');
  }

  // Tutup aplikasi Instagram
  await browser.deleteSession();
})();
