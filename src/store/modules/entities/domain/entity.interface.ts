import { ResourceType } from '@/store/modules/entities/domain/resource-type.enum';

export default interface Entity {
  name: string;
  resources: Array<ResourceType>;
}
