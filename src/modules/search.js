const search = () => {

    const inputSearch = document.querySelector(".search-wrapper_input")
    const searchBtn = document.querySelector(".search-btn")

    searchBtn.addEventListener('click', () =>{
        console.dir(inputSearch.value);
    })

}
export default search

