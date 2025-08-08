import { Tab } from "@headlessui/react"
const Tabs = ({ tabs, setSelected, children }) => {
    return (
        <div className="w-full px-1 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-6 rounded-xl p-1">
                    {tabs.map((tab, index) => (
                        <Tab key={index + tab.title}
                            onClick={() => setSelected(index)}
                            className={({ selected }) => classNames(
                                "w-fit flex items-center outline-none gap-2 px-3 py-2.5 text-base font-semibold leading-4 bg-white ",
                                selected
                                    ? "text-[#4CAF50] border-b-2 border-[#4CAF50]"
                                    : "text-gray-800  hover:text-[#4CAF50]")}
                        >
                            {tab.icon}
                            <span>{tab.title}</span>
                        </Tab>
                    )
                    )}
                </Tab.List>
                <Tab.Panels className='w-full mt-2'>
                    {children}
                </Tab.Panels>

            </Tab.Group>
        </div>
    )
}

export default Tabs

/*
fonction qui joint les classes filtrées 
en une seule chaîne de caractère
 Exemple :  classNames('btn', isActive && 'active', isDisabled && 'disabled');
  Si isActive est vrai, la classe 'active' sera ajoutée
  Si isDisabled est faux, la classe 'disabled' ne sera pas ajoutée
*/
function classNames(...classes) {
    // (...) permet de passer un nombre variable d'arguments à la fonction
    return classes.filter(Boolean).join("");
}