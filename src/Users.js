import { Link } from "react-router-dom";


// sent = true means the message was sent by the current user, false means he recieved it
export const contacts = [{userName:"Aviv Gefen",image:"https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/442174", messages:[{message:"hi aviv", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}] },
{userName:"Miri Masika" ,image:"https://medias.atmag.co.il/www/uploads/2019/11/%D7%9E%D7%99%D7%A8%D7%99-%D7%9E%D7%A1%D7%99%D7%A7%D7%94-%D7%91%D7%A7%D7%9E%D7%A4%D7%99%D7%99%D7%9F-%D7%9C%D7%A1%D7%93%D7%A8%D7%AA-%D7%9E%D7%A8%D7%9B%D7%9B%D7%99-%D7%94%D7%9B%D7%91%D7%99%D7%A1%D7%94-%D7%A9%D7%9C-%D7%9C%D7%A0%D7%95%D7%A8-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%97%D7%A6-3-1140x641-1575204098.jpg",messages:[{message:"hi miri", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}] },
{userName:"Eden Ben Zaken",image:"https://ynet-images1.yit.co.il/picserver5/crop_images/2021/12/01/HynEP0NKK/HynEP0NKK_0_186_1200_675_0_x-large.jpg", messages:[{message:"hi eden", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}]},
{userName:"Hanan Ben Ari", image:"https://www.hatarbut.co.il/wp-content/uploads/2017/08/%D7%97%D7%A0%D7%9F-%D7%91%D7%9F-%D7%90%D7%A8%D7%99-1024x1024.jpg",messages:[{message:"hi hanani", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}]},
{userName:"Keran Peles",image:"https://yt3.ggpht.com/ytc/AKedOLQpfSAj-ft7uLe7eC19qe1HSiyFBujOoD2oTqSs=s900-c-k-c0x00ffffff-no-rj", messages:[{message:"hi keran", sentByMe:true, type: 'text'},  {message:"hello", sentByMe:false, type: 'text'}]}
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
        {userName: "Aviv Gefen" , nickName: "avivi" , image: "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/442174", password: "1234567a", contacts: contactsOfSivan},
        {userName: "Miri Masika" , nickName: "miri" , image: "https://medias.atmag.co.il/www/uploads/2019/11/%D7%9E%D7%99%D7%A8%D7%99-%D7%9E%D7%A1%D7%99%D7%A7%D7%94-%D7%91%D7%A7%D7%9E%D7%A4%D7%99%D7%99%D7%9F-%D7%9C%D7%A1%D7%93%D7%A8%D7%AA-%D7%9E%D7%A8%D7%9B%D7%9B%D7%99-%D7%94%D7%9B%D7%91%D7%99%D7%A1%D7%94-%D7%A9%D7%9C-%D7%9C%D7%A0%D7%95%D7%A8-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%97%D7%A6-3-1140x641-1575204098.jpg", password: "abcd1234", contacts: contactsOfOfri },
        {userName: "Eden Ben Zaken" , nickName: "edna" , image: "https://ynet-images1.yit.co.il/picserver5/crop_images/2021/12/01/HynEP0NKK/HynEP0NKK_0_186_1200_675_0_x-large.jpg", password: "aaaaaaaa8", contacts: contactsOfEden },
        {userName: "Hanan Ben Ari" , nickName: "hanania" , image: "https://www.hatarbut.co.il/wp-content/uploads/2017/08/%D7%97%D7%A0%D7%9F-%D7%91%D7%9F-%D7%90%D7%A8%D7%99-1024x1024.jpg", password: "1c1c1c1c1c", contacts:contactsOfHanan },
        {userName: "Keran Peles" , nickName: "keran" , image: "https://yt3.ggpht.com/ytc/AKedOLQpfSAj-ft7uLe7eC19qe1HSiyFBujOoD2oTqSs=s900-c-k-c0x00ffffff-no-rj", password: "keran666", contacts: contactsOfKeren }
        ];
