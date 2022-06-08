class TextEditor:


    def __init__(self):
        self.left = []
        self.right = []

    def addText(self, text: str) -> None:
        self.left += text

    def deleteText(self, k: int) -> int:
        k = min(k, len(self.left))
        del self.left[-k:]
        return k

    def cursorLeft(self, k: int) -> str:
        self.right += self.left[-k:][::-1]
        del self.left[-k:]
        return ''.join(self.left[-10:])

    def cursorRight(self, k: int) -> str:
        self.left += self.right[-k:][::-1]
        del self.right[-k:]
        return ''.join(self.left[-10:])


# Your TextEditor object will be instantiated and called as such:
# obj = TextEditor()
# obj.addText(text)
# param_2 = obj.deleteText(k)
# param_3 = obj.cursorLeft(k)
# param_4 = obj.cursorRight(k)