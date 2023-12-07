# Pet Adoption Platform.

## [ Project live site Link](https://pet-adoption-auth-1c311.web.app/)

Click here for the Project Live site Link: [https://pet-adoption-auth-1c311.web.app/)

### Note 
* this project is not finished.Project updating is currently underway. And the following admin and user descriptions will be updated
## Main features.
* This is a simple MERN stack website. It's a pet adoption related website.
* This website created for mobile,tablet and desktop user.
* In this website I created some section in home page. section name is Navbar , Banner, our category ,call to action, about us ,contact us ,and footer.
*  In This website I create in 4 categoies pet. cat,dog,rabbit and goat.
* In out of the home page I also created some rotes for this website. this routes are name is petListing, and donationCampaignList.
### Pet Listing 
* any user can see the all pets in 3 colums by decending order in date format.
* added serch functiolity So that he can easily find the pet.
* user he can see the details information of any pets.
* But If a user wants to adopt pet then he must login. Registration is required for the first time.
* After user login , then he can request for pet adoption.
### donationCampaignList
* any user can see the all donation campaign for pets in 3 colums by decending order in date format.
* user he can see the details information of donation campaign.
* But If a user wants to donation for pet then he must login. Registration is required for the first time.
* After user login , then he can donate for this campaign.
## User DashBoard.
#### pet listing part
* user can create a post to adopt her pet. like cate,dog,rabbit etc.
* user can see the all post which he/she created.
* user will show which animal she has requested for adoption.And will also see who has requested to adopt his pet.
* If a user requests to adopt an animal, the pet owner can accept or reject the request.
* If an pet owner accepts the adoption request, the pet will no longer appear available in the pet listing.
* user can be update and deleted any inoformation of pet. if he created any pet post.
* After accepting the user's adaptation request, the pat owner must adopted it by clicking on the 'not adapted' button.
#### donation campaign list part
* user can be create donation campaign for his/her pet.
* User can see the all donation campaign for  MydonationCampaign Route of user dashboard.
* user can see the donated user information in MydonationCampaign route by click the view donator button Who has donated to his/her donation campaign?
* After clicking the Poused button of any campaign, no one else cna not donate in this campaign. when click the unpaused button, then anyone donation this campaign.
* Created ampaign user , can not delete any campaign. only he can edit any campaign.
* In My Donation Campign Route will show information about which campaign I have donated to.
## Admin DashBoard.
* admin user he can see the all pets which is user's created.
* admin user he cann see the all donation and all user information.
* admin can be delete, and edit of post information aobut pet, and accepte adoption request.
* admin can be delete any donation campaign.
* admin can edit any donation campaign.
* admin can be paused and unpaused to any donation campaign.
## Authentication Features.
* Google Singn In method using firebase.
* login and Register system added by firebase.
* First time user must be Register. other wise he can not going to the private route.
* After completed Registerd Then the next time he goes to login, he will be done.
* When a user Register, the password must be 6 characters and at least one uppercase letter and special character.other wise showing a error message.
* When the user just goes to login, he must have the correct email and password

## Technology Use 
#### frontend
* Javascirpt
* React.js
* React Router.
* Firebase (for handling Authentication)
* Tailwind css
* Desi Ui
#### Backend
* Node.js
* Express.js
* MongoDB
* JWT


