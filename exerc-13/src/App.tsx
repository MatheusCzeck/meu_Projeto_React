import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
}

export function MovieDashboard() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=MOCK');
        const data = await res.json();
        if (data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h3>Filmes em Destaque</h3>
      {movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
    </div>
  );
}

export function PromotionalCart() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddKit = () => {
    setCartCount(prevCount => prevCount + 1);
    setCartCount(prevCount => prevCount + 1);
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Itens no Carrinho: {cartCount}</p>
      <button onClick={handleAddKit}>Adicionar Kit (+3)</button>
    </div>
  );
}

export function SanitizerInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(/\d/g, '');
    setInputValue(sanitizedValue);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <label htmlFor="sanitized-input" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        Digite apenas letras (números serão bloqueados):
      </label>
      <input
        id="sanitized-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Tente digitar React2026..."
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
          maxWidth: '300px'
        }}
      />
      <p style={{ marginTop: '10px', color: '#666' }}>
        <strong>Valor no estado:</strong> {inputValue || '(vazio)'}
      </p>
    </div>
  );
}

export function SkillManager() {
  const [skills, setSkills] = useState<string[]>(['Java', 'SQL']);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() === '') return;
    setSkills([...skills, newSkill]);
    setNewSkill('');
  };

  return (
    <div>
      <MovieDashboard />
      
      <hr />

      <PromotionalCart />
      
      <hr />

      <input 
        type="text" 
        value={newSkill} 
        onChange={(e) => setNewSkill(e.target.value)} 
        placeholder="Nova skill"
      />

      <button onClick={handleAddSkill}>Adicionar</button>
      
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>

      <hr />
      
      <SanitizerInput />
    </div>
  );
}