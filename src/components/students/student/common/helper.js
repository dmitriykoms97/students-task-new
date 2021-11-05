export const identifyColor = (element) => {
    if (element) {
        if (typeof element === "string") {
            let numberElement = +element.substring(0, element.length - 1)

            if (numberElement >= 90) {
                return {
                    'color': '#4285F4'
                }
            } else if (numberElement <= 50) {
                return {
                    'color': '#DB4437'
                }
            } else if (numberElement > 50 && numberElement <= 79) {
                return {
                    'color': '#E2B534'
                }
            } else if (numberElement > 80 && numberElement <= 89) {
                return {
                    'color': '#0F9D58'
                }
            }
        } else {
            if (element >= 90) {
                return {
                    'color': '#4285F4'
                }
            } else if (element <= 50) {
                return {
                    'color': '#DB4437'
                }
            } else if (element > 50 && element <= 79) {
                return {
                    'color': '#E2B534'
                }
            } else if (element > 80 && element <= 89) {
                return {
                    'color': '#0F9D58'
                }
            }
        }
    }
}

export const identifyColorSpeed = (element) => {

    if (element) {
        if (element === "Below Expected") {
            return {
                'color': '#DB4437'
            }
        } else if (element === "Above Expected") {
            return {
                'color': '#4285F4'
            }
        } else if (element === "As Expected") {
            return {
                'color': '#0F9D58'
            }
        }
    }
}
