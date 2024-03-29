import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHttp} from '../../hooks/http.hook'
import { v4 as uuidv4 } from 'uuid'
import {newHeroCreate} from '../heroesList/heroesSlice'


const HeroesAddForm = () => {

    const [heroName, setHeroName] = useState('')
    const [heroDescr, setHeroDescr] = useState('')
    const [element, setHeroElement] = useState('')

    const dispatch = useDispatch()

    const {request} = useHttp()

    const onSubmitHandeler = (e) => {
        e.preventDefault()

        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDescr,
            element: element
        }

        request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
        .then(res => console.log(res))
        .then(dispatch(newHeroCreate(newHero)))
        .catch(err => console.log(err))

        setHeroName('')
        setHeroDescr('')
        setHeroElement('')
    }


    return (
        <form onSubmit={onSubmitHandeler} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                        value={heroDescr}
                        onChange={(e) => setHeroDescr(e.target.value)}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e) => setHeroElement(e.target.value)}
                    >
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;