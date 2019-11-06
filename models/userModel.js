
const user = function(data)
{
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.creation_date = new Date();

    this.isValid = function(){
        return (this.username && this.password && this.email);
    }
}

module.exports = user;