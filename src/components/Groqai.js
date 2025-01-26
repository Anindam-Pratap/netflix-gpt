import Groq from 'groq-sdk'
import { GROQ_API } from '../utils/constants';

const client = new Groq({
    apiKey: GROQ_API,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });

export default client