// custom vuetify components

import { DefaultsInstance } from "vuetify/lib/framework.mjs"

export const defaults: DefaultsInstance = {
    VAppBar: {
		elevation: 0,
	},
	VBtn: {
		variant: "flat",
		height: 38,
		rounded: "lg",
		size: "small",
	},
	VTextField: {
		color: "error",
        variant: "outlined",
		density: "comfortable",       
	},
}
