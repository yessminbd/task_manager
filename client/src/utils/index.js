/*
La fonction getInitials prend un nom complet en entrée
et retourne les premières lettres des deux premiers mots du nom en majuscules
*/


export function getInitials(fullName) {
    // diviser le nom complet en un tableau de caractères individuels
    const names = fullName.split(' ');
    // prend les deux premiers éléments du tableau puis prend la première lettre de chaque élément sélectionné et la met en majuscule
    const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
    // concatène les lettres récupérées en une seule chaîne de caractères sans espace entre elles
    const initialsStr = initials.join('');
    return initialsStr;
}

export const priorityStyles = {
    high: "text-red-600",
    medium: "text-orange-500",
    low: "text-yellow-500",
};
export const priorityBg = {
    high: "bg-red-200",
    medium: "bg-orange-100",
    low: "bg-yellow-200",
};

export const taskType = {
    "To do": "bg-blue-500",
    "In progress": "bg-yellow-500",
    Completed: "bg-green-600",
    all: "bg-orange-600"
};


export const act_types = ['Started', 'Completed', 'In progress', 'Commented', 'Bug', 'Assigned'];

export const bgs = [
    "bg-teal-500",
    "bg-red-400",
    "bg-yellow-500",
    "bg-green-600",
    "bg-purple-600",

];

export const formatDate = (date) => { // prend un objet de type Date
    const month = date.toLocaleString("en-US", { month: "short" }); // obtenir le mois au format abrégé
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`; // retourne une date au format DD-MMM-YYYY
    return formattedDate;

}
export function dateFormatter(dateString) { // prend une chaîne de caractères représentant une date
    const inputDate = new Date(dateString);
    if (isNaN(inputDate.getTime())) {
        return "invalid date";
    }
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`; // retourne une date au format YYYY-MM-DD
    return formattedDate;
}

