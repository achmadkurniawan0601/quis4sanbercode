class HomePage{
    get searchIcon(){
        return $('id:com.instagram.android:id/search_tab')
    }

    get searchColumn() {
        return $('id:com.instagram.android:id/action_bar_search_edit_text')
    }

    get usernameAccount() {
        return $('xpath://*[@content-desc="sanbercode"]')
    }

    get followAccount(){
        return $('id:com.instagram.android:id/profile_header_follow_button')
    }

    get unfollowAccount(){
        return $('id: com.instagram.android:id/follow_sheet_unfollow_row')
    }

    async clickSearchIcon(){
        await this.searchIcon.click();
    }

    async typeSearchColumn(){
        await this.searchColumn.click()
    }

    async clickFollowAccount(){
        await this.followAccount.click()
    }

    async clickUnfollowAccount(){
        await this.unfollowAccount.click()
    }
}

module.exports = new HomePage()