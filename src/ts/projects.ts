//@ts-expect-error
import { getElement } from '@utils/shorten/getElement'

getElement('makeProjectBtn').addEventListener('click', () => {
	console.log('Hello World')
})

//Load styles
require('@import_bundles/styles/projects')
