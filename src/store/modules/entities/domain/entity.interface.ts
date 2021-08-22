import Resource from '@/store/modules/entities/domain/resource.interface';

export default interface Entity {
  title: string;
  resources: Array<Resource>;
}
