export const formConrtol = [
    {
        label: "Name",
        name: "name",
        formLabel: "Enter your name",

    },
    {
        label: "Phone",
        name: "phone",
        formLabel: "Enter your phone",
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
        formLabel: "Enter your table Id"
    },
]