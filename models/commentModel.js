
const comment = function(data)
{
    this.Id = data.Id;
    this.Creation_date = data.Creation_date;
    this.Note = data.Note;
    this.Status = data.Status;
    this.Booking_id = data.Booking_id;
    this.Membre_id = data.Membre_id;
    this.House_id = data.House_id;
    this.Text = data.Text;
}

module.exports = comment;
