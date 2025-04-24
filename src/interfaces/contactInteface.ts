export default interface Contact{
    contact_id: number,
    client_id: number,
    comment_date: Date,
    subject: string,
    comment: string,
    archived: boolean
}