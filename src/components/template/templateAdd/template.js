import Category from "./category";
import Label from "./label";
import AddLabelButton from "./addLabelButton";

const Template = ({list, setList}) => (
    list.length > 0 && list.map((category, index1) => (
            <>
                <Category key={index1} list={list} setList={setList} index={index1} />
                {category?.labels && category.labels.length > 0 && category.labels.map((label, index2) => {
                    return (<Label key={index2} list={list} setList={setList} categoryIndex={index1} index={index2} />);
                })}
                <AddLabelButton key={index1+'a'} categoryIndex={index1} list={list} setList={setList} />
            </>
    ))
)

export default Template;