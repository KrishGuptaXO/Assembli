import categories from "../../data/categories";

export default function Categories () {
    return (
        <select>
            <option value="" className="cursor-pointer">Select your build type</option>
            {categories.map((category)=>(
                <option
                    key={category.id}
                    value={category.title}
                >
                    {category.title}
                </option>
            ))}
        </select>
    );
};
