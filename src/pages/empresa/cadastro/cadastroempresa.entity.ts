import { Address } from 'cluster';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cadastroempresateste') //taela do bd
export class CadastroEmpresa {
  @PrimaryGeneratedColumn()
  CE_cnpj: number;

  @Column({ length: 60 })
  CE_nomeempresa: string;

  @Column({ length: 15 })
  CE_telefone: string;

  @Column({ length: 45 })
  CE_email: string;

  @Column({ type: 'blob', nullable: true })
  CE_fotoperfil: Buffer;

  @Column({ type: 'longtext', nullable: true })
  CE_descricao: string;

  @Column({ type: 'float', nullable: true })
  CE_rendamensal: number;

  @Column()
  EmpresaCandidato_EC_id: number;

  @Column()
  EmpresaEndereco_EE_cep: string;

  @Column()
  segmentoAtuacao_SA_id: number;


}
