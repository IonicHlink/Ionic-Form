export enum regex {
  'fName' = '[A-Za-z]+',
  'lName' = '[A-Za-z]+',
  'mobile' = '^[0-9]{10}$',
  'url' = '^(http|https)://.*$',
  'pincode' = '^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$',
  'image' = '^https?:\/\/\S+?\.(?:png|jpe?g|gif|bmp)$',
  'password' = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-zd$@$!%*?&].{3,}',
  'email' = '^([a-zA-Z0-9]{1,})+([a-zA-Z0-9._-]?)+@([a-zA-Z0-9]{2,})+[.]+(([a-zA-Z]){2,10})+([.][a-zA-Z]{2,10})?$',
}
