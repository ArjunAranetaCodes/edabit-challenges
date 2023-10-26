public class Program {
	public static int countWords(String s) {
		int spaceCount = s.split(" ").length - 1;
		return spaceCount + 1;
	}
}