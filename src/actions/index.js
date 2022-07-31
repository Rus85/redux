// import {
//     heroesFetching,
//     heroesFetched,
//     heroesFetchingError,
// } from '../components/heroesList/heroesSlice'

// import {
//     filtersFetching,
//     filtersFetched,
//     filtersFetchingError
// } from '../components/heroesFilters/heroesFiltersSlice'

// export const fetchData = (request) => (dispatch) => {
//     dispatch(heroesFetching());
//     request("http://localhost:3001/heroes")
//         .then(data => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()))
// }

// export const fetchFilters = (request) => (dispatch) => {
//     dispatch(filtersFetching())
//     request('http://localhost:3001/filters')
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError()))
// }

// export const heroesFetching = createAction('HEROES_FETCHING')

// export const heroesFetched = createAction('HEROES_FETCHED')

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')

// export const heroDeleted = createAction('HERO_DELETE')

// export const newHeroCreate = createAction('HERO_CREATE')

// const filtersFetching = createAction('FILTERS_FETCHING')

// const filtersFetched = createAction('FILTERS_FETCHED')

// const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR')

// export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED')
