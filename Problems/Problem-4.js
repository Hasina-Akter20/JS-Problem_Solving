// 4th problem 

function  perfectFriend(list_of_friends){
    // if there is no element in array 
    if(list_of_friends.length==0 ){
        return "Names not founded!"
    }
    for(const friend_name of list_of_friends){
        if(friend_name.length==5){
            return friend_name;
        } 
    }
}

const friends=['Amena', 'Badhan','Riya','Suborna']
console.log(perfectFriend(friends));