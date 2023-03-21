import './Weather.css';
import Footer from './Footer'
import Header from './Header'



function Weather() {
    return (
        <>
            <Header/>
            <div className='weather'>
                <div className='heading'>
                    <br/><br/><br/><br/>
                    Weather
                </div>
                <div className='box'>
                    <div className='card1 purple' id='temp'></div>
                </div>
                <br/><br/><br/><br/>
            </div>
            <Footer/>
        </>
        
    );
}
// const Search ({onSearchChange}) => {
//     const [search, setSearch] = useState(null);
//     const loadOptions = (inputValue) => {
//         setSearch(searchData);
//         onSearchChange(searchData);
//     }
//     const handleOnChange = (searchData) => {
//         setSearch(searchData);
//         onSearchChange(searchData);
//     }
//     return (
//         <AsyncPaginate
//             placeholder="Enter City"
//             debounceTimeout={600}
//             value={search}
//             onChange={handleOnChange}
//             loadOptions={loadOptions}
//         />
//     )
// }
export default Weather;