// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.
// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.

export const getTeamMembers = () => {
    const leads = [
        {
            name: "Yoongu Kang",
            role: "Team Lead/CEO",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        // Add more team members here
    ];

    return leads;
};
