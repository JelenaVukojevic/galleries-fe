export class User
{
  public id = 0;
  public firstName = '';
  public lastName = '';
  public email = '';
  public password = '';
  public confirmPassword = '';

  constructor( data ?: {
    id ? : number,
    firstName ?: string,
    lastName ?: string,
    email ?: string,
    password ?: string,
    confirmPassword ?: string,
  }) {
    Object.assign(this, data || {});
  }
}
