import { Link } from "react-router-dom";

// sent = true means the message was sent by the current user, false means he recieved it
export const contacts = [{userName:"Sivan Jhirad", messages:[{message:"hi sivan", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}] },
{userName:"Ofri Zangi" ,messages:[{message:"hi ofri", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}] },
{userName:"Eden Ben Zaken", messages:[{message:"hi eden", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}]},
{userName:"Hanan Ben Ari", messages:[{message:"hi hanani", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}]},
{userName:"Keran Peles", messages:[{message:"hi keran", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}]}
];


// we can't change the array users points on by we can change the elements in the array


    let contactsOfSivan = [...contacts]
    let contactsOfOfri = [...contacts]
    let contactsOfEden = [...contacts]
    let contactsOfHanan = [...contacts]
    let contactsOfKeren = [...contacts]
    
    contactsOfSivan.splice(0,1)
    contactsOfOfri.splice(1,1)
    contactsOfEden.splice(2,1)
    contactsOfHanan.splice(3,1)
    contactsOfKeren.splice(4,1)
    
    
    export const users = [
        {userName: "Sivan Jhirad" , nickName: "sivani" , image: null, password: "1234567a", contacts: contactsOfSivan   },
        {userName: "Ofri Zangi" , nickName: "ofriki" , image: null, password: "abcd1234", contacts: contactsOfOfri },
        {userName: "Eden Ben Zaken" , nickName: "edna" , image: null, password: "aaaaaaaa8", contacts: contactsOfEden },
        {userName: "Hanan Ben Ari" , nickName: "hanania" , image: null, password: "1c1c1c1c1c", contacts:contactsOfHanan },
        {userName: "Keran Peles" , nickName: "keran" , image: null, password: "keran666", contacts: contactsOfKeren }
        ];
