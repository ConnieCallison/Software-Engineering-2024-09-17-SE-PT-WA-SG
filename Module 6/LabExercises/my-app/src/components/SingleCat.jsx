function SingleCat ({name, latinName}) {
    return (
        <div className="single-cat">
            <h3>{name} (<em>{latinName}</em>)</h3>
        </div>
    );
}

export default SingleCat;