import html.parser
class HTMLFilter(html.parser.HTMLParser):
    text = ''
    def handle_data(self, data): self.text += data + ' '
f = HTMLFilter()
f.feed(open('vjudge.html', encoding='utf-8').read())
open('vjudge.txt', 'w', encoding='utf-8').write(f.text)
