import axios from "axios"

class GetUrlController {
    static  = async (req, res) => {
        const response = await axios.get('https://google.com.br')

        const tagRegex = /<\s*([a-zA-Z]+\d*)(?=[^>]*>)/g;
        const voidTags = [
            'area',
            'base',
            'br',
            'col',
            'command',
            'embed',
            'hr',
            'img',
            'input',
            'keygen',
            'link',
            'meta', 
            'param',
            'source',
            'track',
            'wbr',
          ];
        const matches = response.data.match(tagRegex);
        const filteredTags = matches.filter((tag) => {
            const tagName = tag.toLowerCase().replace(/[<>]/g, '');
            return !voidTags.includes(tagName);
          });

          const tagCounts = {}

          filteredTags.forEach((tag) => {
            const tagName = tag.toLowerCase().replace(/[<>]/g, '');
            tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
          });

      
        res.send(tagCounts)
    }
}


export default GetUrlController