export const Div = () => {
	/* Expected
	 * Show a warn message of Eslint saying the "lg" class should be
	 * in the last position of the line
	 * <div className='block md:block'>Div</div>
	 */

	// Output
	return <div className="block lg:block md:block">Div</div>
}
