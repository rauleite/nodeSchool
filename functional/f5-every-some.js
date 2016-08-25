function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(elemA, index, array) {
            return goodUsers.some(function (elemB, index, array){
                return elemA.id === elemB.id;
            });
        });
    };
}

module.exports = checkUsersValid;