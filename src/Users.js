import { Link } from "react-router-dom";

// sent = true means the message was sent by the current user, false means he recieved it
export const contacts = [{userName:"Sivan Jhirad", messages:[{message:"hi sivan", sentByMe:true},  {message:"hello", sentByMe:false}] },
{userName:"Ofri Zangi" ,messages:[{message:"hi ofri", sentByMe:true},  {message:"hello", sentByMe:false}] },
{userName:"Eden Ben Zaken", messages:[{message:"hi eden", sentByMe:true},  {message:"hello", sentByMe:false}]},
{userName:"Hanan Ben Ari", messages:[{message:"hi hanani", sentByMe:true},  {message:"hello", sentByMe:false}]},
{userName:"Keran Peles", messages:[{message:"hi keran", sentByMe:true},  {message:"hello", sentByMe:false}]}
];


// we can't change the array users points on by we can change the elements in the array
// export const users = [
// {userName: "Sivan Jhirad" , nickName: "sivani" , image: null, password: "1234567a", contacts: [...contacts] },
// {userName: "Ofri Zangi" , nickName: "ofriki" , image: null, password: "abcd1234", contacts: [...contacts] },
// {userName: "Eden Ben Zaken" , nickName: "edna" , image: null, password: "aaaaaaaa8", contacts: [...contacts] },
// {userName: "Hanan Ben Ari" , nickName: "hanania" , image: null, password: "1c1c1c1c1c", contacts: [...contacts] },
// {userName: "Keran Peles" , nickName: "keran" , image: null, password: "keran666", contacts: [...contacts] }
// ];

export const users = [
    {userName: "Sivan Jhirad" , nickName: "sivani" , image: null, password: "1234567a", contacts: [...contacts] },
    {userName: "Ofri Zangi" , nickName: "ofriki" , image: null, password: "abcd1234", contacts: [...contacts] },
    {userName: "Eden Ben Zaken" , nickName: "edna" , image: null, password: "aaaaaaaa8", contacts: [...contacts] },
    {userName: "Hanan Ben Ari" , nickName: "hanania" , image: null, password: "1c1c1c1c1c", contacts: [...contacts] },
    {userName: "Keran Peles" , nickName: "keran" , image: null, password: "keran666", contacts: [...contacts] }
];


// users[0].contacts.splice(0,1)
// delete users[0].contacts[0]
// delete users[1].contacts[1]
// delete users[2].contacts[2]
// delete users[3].contacts[3]
// delete users[4].contacts[4]

