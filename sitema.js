// Componentes de Lucide React
const { 
  Upload, Save, FileText, BookOpen, User, Book, 
  ArrowLeft, CheckSquare, DownloadCloud 
} = lucideReact;

// Componente principal de la aplicación
const SistemaNotas = () => {
  // Estado para almacenar los datos
  const [alumnos, setAlumnos] = React.useState([]);
  const [materias, setMaterias] = React.useState([]);
  const [profesores, setProfesores] = React.useState([]);
  const [calificaciones, setCalificaciones] = React.useState([]);
  const [archivosCargados, setArchivosCargados] = React.useState(0);
  const [fileData, setFileData] = React.useState(null);
  const [vistaActual, setVistaActual] = React.useState('inicio'); // 'inicio', 'carga', 'informes', 'boletines'
  const [mensaje, setMensaje] = React.useState('');
  const [periodoActual, setPeriodoActual] = React.useState('1er Bimestre');
  const [alumnoSeleccionado, setAlumnoSeleccionado] = React.useState(null);
  const [materiaSeleccionada, setMateriaSeleccionada] = React.useState(null);
  const [profesorActual, setProfesorActual] = React.useState(null);
  const [materiasProfesor, setMateriasProfesor] = React.useState([]);
  const [busquedaAlumno, setBusquedaAlumno] = React.useState('');
  
  // Constantes para calificaciones
  const opcionesDesempeno = ['E', 'MB', 'B', 'R', 'M'];
  const opcionesValoracion = ['TEA', 'TEP', 'TE', 'AE', 'AP', 'A'];
  
  // Descripción de las opciones de valoración
  const descripcionValoracion = {
    'TEA': 'Trayectoria Educativa Avanzada',
    'TEP': 'Trayectoria Educativa en Proceso',
    'TE': 'Trayectoria Educativa',
    'AE': 'Aprendizajes Equivalentes',
    'AP': 'Aprendizajes en Proceso',
    'A': 'Aprobado'
  };
  
  // Descripción de las opciones de desempeño
  const descripcionDesempeno = {
    'E': 'Excelente',
    'MB': 'Muy Bueno',
    'B': 'Bueno',
    'R': 'Regular',
    'M': 'Malo'
  };
  
  // Períodos académicos
  const periodos = [
    '1er Bimestre', 
    '1er Informe', 
    '2do Bimestre', 
    '1er Cuatrimestre',
    '3er Bimestre',
    '2do Informe',
    '4to Bimestre',
    '2do Cuatrimestre',
    'Cierre Anual'
  ];
