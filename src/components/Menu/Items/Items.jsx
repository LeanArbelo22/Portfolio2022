const Items = ({openMenu, setOpenMenu}) => {

    const itemsArray = [
        {
            title: 'Home',
            link: '#presentation'
        },
        {
            title: 'Portfolio',
            link: '#portfolio'
        },
        {
            title: 'Studies',
            link: '#studies'
        },
        {
            title: 'Contact',
            link: '#contact'
        }
    ];

  return (
    <ul>
        {
            itemsArray.map((item, i) => (
                <li key={item + i}>
                    <a href={item.link} onClick={()=> setOpenMenu(!openMenu)}>
                        {item.title}
                    </a>
                </li>
            ))
        }
    </ul>
  )
};

export default Items;