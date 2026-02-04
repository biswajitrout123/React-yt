import Card from './components/Card.jsx'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://cdn.vectorstock.com/i/1000v/47/20/google-logo-vector-50014720.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45, // dollars per hour
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: 60,
    location: "Remote, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Noida, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/960px-Airbnb_Logo_B%C3%A9lo.svg.png",
    companyName: "Airbnb",
    datePosted: "2 months ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: 68,
    location: "Remote, India"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/tesla-logo-png-black-1.png",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Pune, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/IBM/IBM-Logo.wine.png",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Kolkata, India"
  }
];

// console.log(jobOpenings);



  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {
        console.log(idx);
        
        // return <h1>Hey</h1>
        // return <h1>{elem.pay}</h1>
        // return <h1>{elem.companyName}</h1>
        return <div key={idx}> 
        <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App




