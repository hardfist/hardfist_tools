import { agent } from 'utils/agent';
export function get() {
  return agent.get<{
    tags: string[];
  }>('/tags');
}
