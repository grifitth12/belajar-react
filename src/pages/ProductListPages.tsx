import {useSearchParams} from 'react-router';

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));

    const handleSortValueChange = (sortValue:string) => {
        //ganti searh params 'sort' dengan value 'price-asc'
        searchParams.set("sort", sortValue);

        setSearchParams(searchParams);
    }

    return (
        <div>
            <h1>bla bla bla</h1>
            <ul>
                <li>Sort: {searchParams.get("sort")}</li>
                <li>Name: {searchParams.get("name")}</li>
            </ul>
            <button onClick={() => handleSortValueChange("price-memke")}>
                Click Here !</button>
        </div>
    )
}

export default ProductListPage;