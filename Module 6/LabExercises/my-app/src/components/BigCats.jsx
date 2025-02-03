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

function BigCats () {
    return (
        <div>
        <div className="big-cats"></div>
            <h2>Big Cats</h2>
        </div>)
    }

export default BigCats;