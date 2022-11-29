export const formConrtol = [
    {
        label: "Name",
        name: "name",
        formlabel: "Enter your name",

    },
    {
        label: "Phone",
        name: "phone",
        formlabel: "Enter your phone",
        rules: {
            maxLength: {
                value: 13,
                message: "Phone number won't be more than 13"
            },
            required: {
                value: true,
                message: "This is required"
            }
        }
    },
    {
        label: "Table No",
        name: "table_id",
        formlabel: "Enter your table Id"
    },
]