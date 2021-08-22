import { ResourceType } from '@/store/modules/entities/domain/resource-type.enum';
import Entity from '@/store/modules/entities/domain/entity.interface';

export default interface EntitySchema {
  name: string;
  allowedResources: Array<ResourceType>;
  entries: Array<Entity>;
}
