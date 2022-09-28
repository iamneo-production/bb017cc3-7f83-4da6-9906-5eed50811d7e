import './Book.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcvXeWP6GfiHLzQ-hSt7BGyhGnlieDTa8",
    authDomain: "glowspark-69638.firebaseapp.com",
    projectId: "glowspark-69638",
    storageBucket: "glowspark-69638.appspot.com",
    messagingSenderId: "491315114016",
    appId: "1:491315114016:web:56aa7f110f3986b16dcc45",
    measurementId: "G-QQLHS4Q8R0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const Book = () => {
    let Hotels = [
        {
            name: "Beautician 1",
            price: "100",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsalon&psig=AOvVaw3-JkeAFH5W_0d26PeHt49i&ust=1664450123332000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDJsv-tt_oCFQAAAAAdAAAAABAE",
        },

        {
            name: "Beautician 2",
            price: "200",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fhair-salon.html&psig=AOvVaw3-JkeAFH5W_0d26PeHt49i&ust=1664450123332000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDJsv-tt_oCFQAAAAAdAAAAABAV",
        },
        {
            name: "Beautician 3",
            price: "300",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhair-salon&psig=AOvVaw2lSXtfMhS1TwnhjboO1fgb&ust=1664450209956000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiAsauut_oCFQAAAAAdAAAAABAN",
        },
        {
            name: "Beautician 4",
            price: "400",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhair-salon&psig=AOvVaw2lSXtfMhS1TwnhjboO1fgb&ust=1664450209956000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiAsauut_oCFQAAAAAdAAAAABAS",
        },
    ]
    // console.log(Hotels[0].price);
    const bookHotel1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[0].image;
        nameTarget.innerHTML = Hotels[0].name;
        priceTarget.innerHTML = '$' + Hotels[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[0].image,
            HotelName: Hotels[0].name,
            HotelPrice: '$' + Hotels[0].price,
            });
        }

    }
    const bookHotel2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[1].image;
        nameTarget.innerHTML = Hotels[1].name;
        priceTarget.innerHTML = '$' + Hotels[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[1].image,
            HotelName: Hotels[1].name,
            HotelPrice: '$' + Hotels[1].price,
            });
        }
    }
    const bookHotel3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[2].image;
        nameTarget.innerHTML = Hotels[2].name;
        priceTarget.innerHTML = '$' + Hotels[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[2].image,
            HotelName: Hotels[2].name,
            HotelPrice: '$' + Hotels[2].price,
            });
        }
    }
    const bookHotel4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[3].image;
        nameTarget.innerHTML = Hotels[3].name;
        priceTarget.innerHTML = '$' + Hotels[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            HotelImage: Hotels[3].image,
            HotelName: Hotels[3].name,
            HotelPrice: '$' + Hotels[3].price,
            });
        }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Find best hotel</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookHotel1}>
                            <img src={Hotels[0].image} alt="hotel1" />
                            <div className="hotel_name">{Hotels[0].name}</div>
                            <div className="price">{'$' + Hotels[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel2}>
                            <img src={Hotels[1].image} alt="hotel2" />
                            <div className="hotel_name">{Hotels[1].name}</div>
                            <div className="price">{'$' + Hotels[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel3}>
                            <img src={Hotels[2].image} alt="hotel3" />
                            <div className="hotel_name">{Hotels[2].name}</div>
                            <div className="price">{'$' + Hotels[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel4}>
                            <img src={Hotels[3].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[3].name}</div>
                            <div className="price">{'$' + Hotels[3].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;