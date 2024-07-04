function TopPart(props) {
    return (<div className="topPart flex font-secondary text-[#7f8fa6]">
        <div className="type uppercase font-semibold text-[#222f3e]">
            {
                props.type
            }
        </div>
        <div className="date ml-2">
            {
                props.date
            }
        </div>
    </div>);
}

export default TopPart;