// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.
// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.

export const getTeamMembers = (t: (key: string) => string) => {
    // Placeholder data
    const leads = Array(8).fill({
        name: t('team.comingSoon'),
        role: t('team.preparing'),
        image: '/assets/team/yoongu_kang.jpg'
    });

    return leads;
};
