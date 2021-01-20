# RoomateManagementApp

## Note: This is the back-end part of the project check out [this repo](https://github.com/hhhpv/RoommateManagementApplication) for the mobile application part

### Important Info:
* **The rest APIs are written in javascript using nodeJS framework. Please check out the controllers for internal implementation**
* **MongoDB is used for datastore and mongoose is used to model the data**

### Folder Description:
-- configurations-contains private keys <br/>
-- Controller-contains the controllers for the application <br/>
-- Model-contains the mongoose data models for the application <br/>
-- routes-contains the routes handled by the ExpressJS router <br/>

## API Documentation:

* **Error Pages**
```
    {
      result:"Seems like you have taken a wrong path here!"
    }
```
* **Login to the application**
```
    ENDPOINT: /room-login
    Request Body Parameters: username, email, and password.
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on Success:
    {
      result:"failure"
      data:
        {
          message:"errorMessage",
          token:"token",
          groupID:"groupId"
        }
    }
```
* **Sign Up to the app as admin/user**
```
    ENDPOINT for admin: /signUp/admin
    ENDPOINT for user: /signUp/user
    
    Request Body Parameters: username, email, password, groupId
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          message:"successMessage"
        }
    }
    
```
* **Get bill category**
```
    ENDPOINT: /profile/get-bill-category
    Request Body Parameters: username, token, email
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          message:"successMessage",
          categories:"result"
        }
    }
```
* **Get Room-mates**
```
    ENDPOINT: /profile/get-room-mates
    Request Body Parameters: username, token, email
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          room_mates:"result_from_database"
        }
    }
```

* **Add Shared Expense**
```
    ENDPOINT: /profile/add-shared-expense
    Request Body Parameters: username, token, email, month, year, groupID, and category.
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          message:"successMessage"
        }
    }
```

* **Delete Shared Expense**
```
    ENDPOINT: /profile/delete-shared-expense
    Request Body Parameters: username, token, email, month, year, groupID, and category.
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          message:"successMessage"
        }
    }
```

* **View User Profile**
```
    ENDPOINT: /profile/view/profile
    Request Body Parameters: username, token, email
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          "username":"name of user",
          "email":"emailId",
          "role":"userRole",
          "group":"groupID"
        }
    }
```

* **View Monthly Expense**
```
    ENDPOINT: /profile/view/monthly-expense
    Request Body Parameters: username, token, email, month, year, groupId
    Response on failure:
    {
      result:"failure"
      data:
        {
          message:"errorMessage"
        }
    }
    
    Response on success:
    {
      result:"success"
      data:
        {
          "data":"result_from_db"
        }
    }
```
