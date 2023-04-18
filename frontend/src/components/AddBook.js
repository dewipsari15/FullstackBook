import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState(' ');
    const [coverImage, setCoverImage] = useState(' ');
    const [author, setAuthor] = useState(' ');
    const [deskripsi, setDeskripsi] = useState(' ');
    const [stok, setStok] = useState(' ');
    const [price, setPrice] = useState(' ');
    const navigate = useNavigate();

    const saveBook = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products', {
            title: title,
            coverImage: coverImage,
            author: author,
            deskripsi: deskripsi,
            stok: stok,
            price: price
        });
        navigate.push("/");
    }

    return (
        <div>
            <div onSubmit={saveBook} className="text-center">
                <div className="field mt-3">
                    <label className="label">Title: </label>
                    <input type="text" class="form-control" aria-label="Text input with checkbox"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="field mt-3">
                    <label className="label">Cover image: </label>
                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="cover image"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)} />
                </div>

                <div className="field mt-3">
                    <label className="label">Author: </label>
                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="author book"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div className="field mt-3">
                    <label className="label">Deskripsi: </label>
                    <textarea type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)} />
                </div>

                <div className="field mt-3">
                    <label className="label">Stok: </label>
                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="stok"
                        value={stok}
                        onChange={(e) => setStok(e.target.value)} />
                </div>

                <div className="field mt-3">
                    <label className="label">Price: </label>
                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br />
                <button className="btn btn-success">Save</button>
            </div>
        </div>
    )
}

export default AddBook
