

const member = function(data)
{
    this.id = data.id;
    this.Lastname = data.Lastname;
    this.Firstname = data.Firstname;
    this.Email = data.Email;
    this.Phone = data.Phone;
    this.Username = data.Username;
    this.Password = data.Password;
    this.Role = 0;
    this.Home_street = data.Home_street;
    this.Home_num = data.Home_num;
    this.Home_box = data.Home_box;
    this.Home_city_id = data.Home_city_id;
    this.Facturation_street = data.Facturation_street;
    this.Facturation_num = data.Facturation_num;
    this.Facturation_box = data.Facturation_box;
    this.Facturation_city_id = data.Facturation_city_id;

    this.isValid = function(){
        return true

    }

};

module.exports = member;