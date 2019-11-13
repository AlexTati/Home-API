
const comment = function(data)
{
    this.Id = data.Id;
    this.Creation_date = data.Creation_date;
    this.Note = data.Note;
    this.Status = data.Status;
    this.Membre_id = data.Membre_id;
    this.House_id = data.House_id;
    this.Text = data.Text;

    this.isValid = function () {
        return true;
    }
}

module.exports = comment;
