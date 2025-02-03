import SingleCat from './SingleCat'

const cats = [
{ name: 'Cheetah', latinName: 'Acinonyx jubatus' },
{ name: 'Cougar', latinName: 'Puma concolor' },
{ name: 'Jaguar', latinName: 'Panthera onca' },
{ name: 'Leopard', latinName: 'Panthera pardus' },
{ name: 'Lion', latinName: 'Panthera leo' },
{ name: 'Snow leopard', latinName: 'Panthera uncia' },
{ name: 'Tiger', latinName: 'Panthera tigris' },
];

const [catList, setCatLIist] = useState(cats);

const sortCats = [...catList].sort;

const reverseCats = [...catList].reverse();

const filterPanters = cats.latinName.startsWith("Panthera");

const resetList = setCatList(cats);

function BigCats () {
    return (

        <div className="BigCats">
            <h2>Big Cats</h2> 
            <div>[catList]</div>

        <button
        onClick={() => [...catList].sort}>
        Sort Alphabetically
        </button>

        <button
        onClick={() => [...catList].reverse}>
        Reverse Order
        </button>

        <button
        onClick={() => [resetList]}>
        Reset List
        </button>

        <button
        onClick={() => [filterPanters]}>
        Filter Panthers
        </button>

        </div>

    )
}

function AddCatForm ({onAddCat}) {
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName})
        }


    return (
    <div className="AddCatForm">
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input name="name" value={name}
                    onChange={(e) => setName(e.target.value)} />     
            </label>
            <label>Latin Name:
                <input name="latin name" value={latinName}
                onChange={(e) => setLatinName(e.target.value)} />
            </label>
            <button>Add Cat</button>
        </form>

    </div>
    ) 
}

<div>
function deleteCat () {
catList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const id = parseInt(e.target.dataset.id);
        catList = catList.filter(catList => catList.id !== id);
        displayCatList(catList);
        updateCatList();
    }
}}

return(
<button class="delete-btn" data-id="${catList.id}">Delete</button>
)
</div>


export default BigCats;
