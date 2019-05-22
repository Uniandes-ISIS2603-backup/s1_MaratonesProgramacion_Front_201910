import { LugarCompetencia } from './../LugarCompetencia/lugarCompetencia';
import { Competencia } from './Competencia';
import { Usuario } from '../usuario/usuario';
import { Equipo } from '../equipo/equipo';
import { Ejercicio } from '../ejercicio/ejercicio';
export class CompetenciaDetail extends Competencia 
{
    jueces: Usuario[];
    equipos: Equipo[];
    ejercicios: Ejercicio[];
    lugares: LugarCompetencia[];
}
